export class Savoir {
  constructor(private _intitule: string,
              private _obligatoire: number) {
  }

  get intitule(): string {
    return this._intitule;
  }

  get obligatoire(): number {
    return this._obligatoire;
  }

  set intitule(value: string) {
    this._intitule = value;
  }

  set obligatoire(value: number) {
    this._obligatoire = value;
  }

}
