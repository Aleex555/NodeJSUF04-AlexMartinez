const { calculateAverageAge } = require('../../src/api/services/userServices');

describe('calculateAverageAge', () => {
  it('debería calcular la edad media correcta', () => {
    const users = [
      { birthDate: '1990-01-01' },
      { birthDate: '1980-01-01' },
      { birthDate: '2000-01-01' }
    ];
    
    const result = calculateAverageAge(users);
    const currentYear = new Date().getFullYear();
    const expectedAverageAge = Math.round(((currentYear - 1990) + (currentYear - 1980) + (currentYear - 2000)) / 3);
    
    expect(Math.round(result)).toEqual(expectedAverageAge);
  });

  it('debería retornar 0 si no se proporcionan usuarios', () => {
    const result = calculateAverageAge([]);
    expect(result).toEqual(0);
  });
});
