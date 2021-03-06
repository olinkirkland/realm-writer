import Realm from '../../../realm/Realm';
import Section from '../Section';

export default class HeraldrySection extends Section {
  constructor(realm: Realm, name: string) {
    super(realm, name);
  }

  public render(): HTMLElement {
    const el: HTMLElement = document.createElement('li');

    // Title
    const titleEl: HTMLElement = document.createElement('h3');
    titleEl.textContent = this.name;
    el.appendChild(titleEl);

    // Content
    const textEl: HTMLElement = document.createElement('p');

    // Vars
    const tincture1: string = `<span class="tincture inline-icon" style="background-color: ${this.realm.heraldry.tinctures[0].color}"></span>${this.realm.heraldry.tinctures[0].name}`;
    const tincture2: string = `<span class="tincture inline-icon" style="background-color: ${this.realm.heraldry.tinctures[1].color}"></span>${this.realm.heraldry.tinctures[1].name}`;

    // "The design of Nordland's coat of arms resembles a centered, red chevron on a silver field. Three gold circles are evenly spaced in the corners of the design."
    textEl.innerHTML += `The design of ${
      this.realm.name
    }'s coat of arms resembles ${eval(
      `\`${this.realm.heraldry.ordinary.description}\``
    )}.`;

    if (this.realm.heraldry.chargeLayout) {
      const chargeTincture: string = `<span class="tincture inline-icon" style="background-color: ${this.realm.heraldry.chargeTincture.color}"></span>${this.realm.heraldry.chargeTincture.name}`;
      const chargeName: string = this.realm.heraldry.charge.name;
      if (this.realm.heraldry.chargeLayout) {
        textEl.innerHTML += ` ${eval(
          `\`${this.realm.heraldry.chargeLayout.description}\``
        )}`;
      }
    }

    el.append(textEl);
    return el;
  }
}
