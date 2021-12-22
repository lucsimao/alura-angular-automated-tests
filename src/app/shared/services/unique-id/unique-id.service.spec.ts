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
  });
});
