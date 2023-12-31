const { parseDogAttributes } = require('../attr-util');
const { attrParser } = require('../attr-parser');
// const { parseAffectionLevel } = require('../attr-parser');

describe('dog_attrs_with(jest-spy)', () => {
  const catStarsAvailable = {
    affection_level: 2,
    adaptability: 4,
    child_friendly: 3,
    dog_friendly: 5,
    energy_level: 4,
    grooming: 3,
    health_issues: 5,
    intelligence: 4,
    shedding_level: 3,
    social_needs: 2,
    stranger_friendly: 1,
    vocalisation: 0,
  };

  const stars5 = ['★', '★', '★', '★', '★'].join(' ');
  const stars4 = ['★', '★', '★', '★'].join(' ');
  const stars3 = ['★', '★', '★'].join(' ');
  const stars2 = ['★', '★'].join(' ');
  const stars1 = ['★'].join(' ');

  const parsedDogStars = {
    affectionLevel: 'jest.spyOn: DOG',
    adaptability: stars4,
    childFriendly: stars3,
    dogFriendly: stars5,
    energyLevel: stars4,
    grooming: stars3,
    healthIssues: stars5,
    intelligence: stars4,
    sheddingLevel: stars3,
    socialNeeds: stars2,
    strangerFriendly: stars1,
    vocalisation: '',
  };

  it('should return parseAffectionLevel with [ jest.spyOn: DOG ]', () => {
    const mockedParser = jest.spyOn(attrParser, 'parseAffectionLevel');
    mockedParser.mockImplementation(() => {
      return 'jest.spyOn: DOG';
    });

    const result = parseDogAttributes(catStarsAvailable);
    expect(result).toStrictEqual(parsedDogStars);
  });
});
