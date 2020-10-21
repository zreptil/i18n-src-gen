/* tslint:disable:object-literal-key-quotes */
import '@angular/localize/init';
import {loadTranslations} from '@angular/localize';

const messages = [{id: 'de', data: {
'5653266668957518646': 'Datenverwaltung',
'3511589864838625223': 'Mitglieder',
'8704264116845890321': 'Derbys',
'5959992921501220550': 'phpMyAdmin',
'6519348851080927240': 'Lade Tabellenblatt...',
'5792022429434896505': 'Extrahiere Daten...',
'5083793958957824477': 'HayDay Liste',
'8953033926734869941': 'Name',
'3733215288982610673': 'Level',
'1327302134726196371': 'Punkte',
'ea874bfddd5719e74e8ca53c8f4f3bbc1d80c662': 'HayDay Tabelle',
'dc74b83bdcf87c5b72790ce79aaf8292be4708da': 'Daten neu importieren',
'1e47e9b141ecf3b1246992aaf0be5f799ca3b54d': 'RAW',
'2c44d8c726554026d818fdf43f60d91130cc2f3f': 'Derbyliste',
'2b897a3509bca08af2b3cf7841b298c7693aeb63': 'Memberliste',
'6930b216405c9289769704a2cb4e5f119e9fede9': 'Rang',
'ae8108df7db203ecff00275d11503b32061f4e63': 'Derbyende am:'}}, {id: 'en-GB', data: {
'5653266668957518646': 'Datamanagement',
'3511589864838625223': 'Members',
'8704264116845890321': 'Derbys',
'5959992921501220550': 'phpMyAdmin',
'6519348851080927240': 'Loading sheet...',
'5792022429434896505': 'Extracting data...',
'5083793958957824477': 'HayDay List',
'8953033926734869941': 'Name',
'3733215288982610673': 'Level',
'1327302134726196371': 'Points',
'ea874bfddd5719e74e8ca53c8f4f3bbc1d80c662': 'HayDay Table',
'dc74b83bdcf87c5b72790ce79aaf8292be4708da': 'Import data again',
'1e47e9b141ecf3b1246992aaf0be5f799ca3b54d': 'RAW',
'2c44d8c726554026d818fdf43f60d91130cc2f3f': 'Derbylist',
'2b897a3509bca08af2b3cf7841b298c7693aeb63': 'Memberlist',
'6930b216405c9289769704a2cb4e5f119e9fede9': 'Rank',
'ae8108df7db203ecff00275d11503b32061f4e63': 'Derbyend at:'}}
];

const check = localStorage.getItem('language') || 'en-GB';
let lng = messages.find((lang) => lang.id === check);
if (!lng) {
  lng = messages[0];
}

loadTranslations(lng.data);
