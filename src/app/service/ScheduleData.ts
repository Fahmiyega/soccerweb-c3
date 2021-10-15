import { Schedule } from "src/app/interface/schedule";
import { Team } from "src/app/interface/team";

export const SEASON_SCHEDULE:Schedule [] = [
    {id: 1, PlayingDate: new Date(2021,08,10),HomeTeam: 'Persija',
    AwayTeam: 'Persib',HomeScore:3, AwayScore:4,
    RefName:'Joko',notes;'Pertandingan overtime'},
    {id: 2, PlayingDate: new Date(2021,08,11),HomeTeam: 'Persipon',
    AwayTeam: 'RRQ',HomeScore:3, AwayScore:0,
    RefName:'Sukasjo',notes;'Pertandingan melelahkan'},
    {id: 3, PlayingDate: new Date(2021,08,12),HomeTeam: 'Evos',
    AwayTeam: 'Persis Solo',HomeScore:2, AwayScore:0,
    RefName:'Joko',notes;'Pertandingan overtime'},
    {id: 4, PlayingDate: new Date(2021,08,13),HomeTeam: 'Persipon',
    AwayTeam: 'Persija',HomeScore:3, AwayScore:0,
    RefName:'Sukasjo',notes;'Pertandingan dimenangkan persipon'},
    {id: 5, PlayingDate: new Date(2021,08,14),HomeTeam: 'MU',
    AwayTeam: 'Real Madrid',HomeScore:2, AwayScore:4,
    RefName:'Taufik',notes;'Pertandingan overtime'},
]

export const TEAMS: Team [] =[
    {id:1, name:'Evos', type: 'Over 30'},
    {id:2, name:'Persib' ,type: 'Over 30'},
    {id:3, name:'Persija', type: 'Over 30'},
    {id:4, name:'Persipon', type: 'Over 30'},
    {id:5, name:'Bali United', type: 'Over 30'}
]