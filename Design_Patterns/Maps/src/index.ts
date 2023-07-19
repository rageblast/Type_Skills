/// <reference types="@types/google.maps" />

// we read about it in the below document

// https://developers.google.com/maps/documentation/javascript/using-typescript#Module_Import

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();

// console.log(user);

const company = new Company();
// console.log(company);

const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);
