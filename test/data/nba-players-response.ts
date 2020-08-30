import { NbaPlayer } from '../../src/types/nba-players';
import { NbaTeam } from '../../src/config/nba-teams';

export const NBA_PLAYERS_RESPONSE: NbaPlayer[] = [
  {
    id: '203500',
    college: 'Pittsburgh',
    country: 'New Zealand',
    dateOfBirth: '1993-07-20',
    debutYear: '2013',
    draft: { teamId: '1610612760', pick: '12', round: '1', year: '2013' },
    firstName: 'Steven',
    fullName: 'Steven Adams',
    height: '6\' 11"',
    isActive: true,
    lastName: 'Adams',
    number: '12',
    position: 'C',
    teamId: '1610612760',
    teams: [
      {
        id: '1610612760',
        start: '2013',
        end: '2019',
        teamName: 'Oklahoma City Thunder',
        teamTriCode: 'OKC',
      },
    ],
    weight: '265',
    yearsPro: '6',
  },
  {
    id: '1628389',
    college: 'Kentucky',
    country: 'USA',
    dateOfBirth: '1997-07-18',
    debutYear: '2017',
    draft: { teamId: '1610612748', pick: '14', round: '1', year: '2017' },
    firstName: 'Bam',
    fullName: 'Bam Adebayo',
    height: '6\' 9"',
    isActive: true,
    lastName: 'Adebayo',
    number: '13',
    position: 'C-F',
    teamId: '1610612748',
    teams: [
      {
        id: '1610612748',
        start: '2017',
        end: '2019',
        teamName: 'Miami Heat',
        teamTriCode: 'MIA',
      },
    ],
    weight: '255',
    yearsPro: '2',
  },
  {
    id: '200746',
    college: 'Texas',
    country: 'USA',
    dateOfBirth: '1985-07-19',
    debutYear: '2006',
    draft: { teamId: '1610612741', pick: '2', round: '1', year: '2006' },
    firstName: 'LaMarcus',
    fullName: 'LaMarcus Aldridge',
    height: '6\' 11"',
    isActive: true,
    lastName: 'Aldridge',
    number: '12',
    position: 'C-F',
    teamId: '1610612759',
    teams: [
      {
        id: '1610612757',
        start: '2006',
        end: '2014',
        teamName: 'Portland Trail Blazers',
        teamTriCode: 'POR',
      },
      {
        id: '1610612759',
        start: '2015',
        end: '2019',
        teamName: 'San Antonio Spurs',
        teamTriCode: 'SAS',
      },
    ],
    weight: '250',
    yearsPro: '13',
  },
];

export const NBA_PLAYER_BY_ID_RESPONSE: NbaPlayer = {
  id: '200746',
  college: 'Texas',
  country: 'USA',
  dateOfBirth: '1985-07-19',
  debutYear: '2006',
  draft: { teamId: '1610612741', pick: '2', round: '1', year: '2006' },
  firstName: 'LaMarcus',
  fullName: 'LaMarcus Aldridge',
  height: '6\' 11"',
  isActive: true,
  lastName: 'Aldridge',
  number: '12',
  position: 'C-F',
  teamId: '1610612759',
  teams: [
    {
      id: '1610612757',
      start: '2006',
      end: '2014',
      teamName: 'Portland Trail Blazers',
      teamTriCode: 'POR',
    },
    {
      id: '1610612759',
      start: '2015',
      end: '2019',
      teamName: 'San Antonio Spurs',
      teamTriCode: 'SAS',
    },
  ],
  weight: '250',
  yearsPro: '13',
};

export const NBA_PLAYER_BY_TEAM_ID_RESPONSE: NbaPlayer[] = [
  {
    id: '1628389',
    college: 'Kentucky',
    country: 'USA',
    dateOfBirth: '1997-07-18',
    debutYear: '2017',
    draft: { teamId: '1610612748', pick: '14', round: '1', year: '2017' },
    firstName: 'Bam',
    fullName: 'Bam Adebayo',
    height: '6\' 9"',
    isActive: true,
    lastName: 'Adebayo',
    number: '13',
    position: 'C-F',
    teamId: '1610612748',
    teams: [
      {
        id: '1610612748',
        start: '2017',
        end: '2019',
        teamName: 'Miami Heat',
        teamTriCode: 'MIA',
      },
    ],
    weight: '255',
    yearsPro: '2',
  },
];

export const NBA_TEAM: NbaTeam = {
  teamId: '1610612739',
  tricode: 'CLE',
  fullName: 'Cleveland Cavaliers',
  moniker: 'cavaliers',
  primaryColor: '#860038',
  secondaryColor: '#860038',
  web: {
    homepage: 'http://www.nba.com/cavaliers',
    tickets: 'http://www.nba.com/cavaliers/tickets',
  },
};
