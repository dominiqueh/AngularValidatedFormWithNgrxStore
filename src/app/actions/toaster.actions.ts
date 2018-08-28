import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Toaster } from './../models/toaster.model';

export const BRAND = 'BRAND';
export const DESCRIPTION = 'DESCRIPTION';
export const ALWAYSTOAST = 'ALWAYSTOAST';

export class Brand implements Action {
    readonly type = BRAND;

    constructor(public payload: string) {}
}

export class Description implements Action {
    readonly type = DESCRIPTION;

    constructor(public payload: string) {}
}

export class AlwaysToast implements Action {
    readonly type = ALWAYSTOAST;

    constructor(public payload: string) {}
}

export type Actions = Brand | Description | AlwaysToast;
