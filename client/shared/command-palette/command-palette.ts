import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {Characters} from 'lib/collections/characters';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'command-palette',
    template: `
<section 
  class="t50 w50% p20 horizontal-align-fixed add-shadow z1 bgc-white dn"
  [class.db]="visible">
  <form (submit)="performCommand()">
    <input type="text"
      [(ngModel)]="command"
      (keyup)="keyboardEvent($event)"
      class="js-command-palette-input max-width h40 p0-20 fz18"/>
  </form>
  <section 
    *ngIf="commands.length > 0"
    class="posa t100 l0 max-width bgc-white add-shadow">
    <div
      *ngFor="#command of commands"
      (click)="command.command()"
      class="p20 bb1-s-black">
      {{command.text}}
    </div>
  </section>
</section>
  `
})
export class CommandPalette extends MeteorComponent {
  visible: boolean = false;
  command: string = '';
  router: Router;
  campaign: any;
  character: any;

  characters: Mongo.Cursor<Object>;

  possibleCommands: any[] = [
      {
        text: 'Campaigns',
        command: () => this.router.navigate(['/CampaignList'])
      },
      {
        text: 'Content Creator',
        command: () => this.router.navigate(['/ContentCreator'])
      },
      {
        text: 'Characters',
        condition: () =>  this.campaign,
        command: () => this.router.navigate(['/CharacterList'])
      },
      {
        text: 'Battles',
        condition: () => this.campaign,
        command: () => this.router.navigate(['/BattleList'])
      }
    ];
  commands: any[] = [];
  
  constructor(_router: Router) {
    super();
    this.router = _router;
    this.autorun(() => {
        this.campaign = Session.get('campaign');
        this.character = Session.get('character');
        this.subscribe('characters', () => {
          this.character = Characters.find({ campaignId: this.campaign._id });
        }, true);
    });
    
    document.querySelector('body')
      .addEventListener('keyup', this.togglePalette.bind(this));
  }

  togglePalette(e: any) {
    var input = document.querySelector('.js-command-palette-input');

    if (e.ctrlKey && e.altKey && e.keyCode == 80) {
      this.visible = !this.visible;
      setTimeout(() => input.focus(), 0);
    }
    else if (e.keyCode == 27)
      this.closePalette();
  }

  closePalette(): void {
    this.command = '';
    this.commands = [];
    this.visible = false;
  }

  keyboardEvent(e) {
    e.preventDefault();
    if (this.command.length > 2)
      this.commands = this.possibleCommands
        .filter((i) => {
          var condition = (i.condition) ? i.condition : () => true;
          return condition() && 
            i.text.toLowerCase().indexOf(this.command.toLowerCase()) > -1;
        });
    else
        this.commands = [];
  }

  performCommand() {
    if (this.commands.length > 0) {
      this.commands[0].command();
      this.closePalette();
    }
  }
}