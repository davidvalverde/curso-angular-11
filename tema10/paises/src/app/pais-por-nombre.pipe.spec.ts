import { PaisPorNombrePipe } from './pais-por-nombre.pipe';

describe('PaisPorNombrePipe', () => {
  it('create an instance', () => {
    const pipe = new PaisPorNombrePipe();
    expect(pipe).toBeTruthy();
  });
});
