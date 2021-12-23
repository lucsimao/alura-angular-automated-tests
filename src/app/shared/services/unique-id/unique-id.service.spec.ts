import { UniqueIDService } from './unique-id.service';

const makeSut = () => {
  const sut = new UniqueIDService();

  return { sut };
};

describe(UniqueIDService.name, () => {
  describe(UniqueIDService.prototype.generateUniqueIdWithPrefix.name, () => {
    it('should generate id when called with prefix', () => {
      const { sut } = makeSut();
      const prefix = 'app';

      const result = sut.generateUniqueIdWithPrefix(prefix);

      expect(result.startsWith('app-')).toBeTrue();
    });

    it('should not generate duplicated IDs when called multiple times', () => {
      const { sut } = makeSut();
      const prefix = 'app';

      const ids = new Set();
      for (let i = 0; i < 50; i++) {
        ids.add(sut.generateUniqueIdWithPrefix(prefix));
      }
      expect(ids.size).toBe(50);
    });

    it('should return the number of generatedIds when called', () => {
      const { sut } = makeSut();
      const prefix = 'app';

      sut.generateUniqueIdWithPrefix(prefix);
      sut.generateUniqueIdWithPrefix(prefix);
      const result = sut.getNumberOfGeneratedUniqueIds();

      expect(result).toBe(2);
    });

    it('should throw when called with empty', () => {
      const { sut } = makeSut();
      const emptyValues = [null, undefined, '', '0', '1'];

      emptyValues.forEach((emptyValue) => {
        expect(() => sut.generateUniqueIdWithPrefix(emptyValue)).toThrow(
          new Error('Prefix can not be empty')
        );
      });
    });
  });
});
