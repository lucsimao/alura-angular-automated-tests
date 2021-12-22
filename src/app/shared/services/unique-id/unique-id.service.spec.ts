import { UniqueIDService } from './unique-id.service';

const makeSut = () => {
  const sut = new UniqueIDService();

  return { sut };
};

describe(UniqueIDService.name, () => {
  describe(UniqueIDService.prototype.generateUniqueIdWithPrefix.name, () => {
    it('should generate id when called with prefix', async () => {
      const { sut } = makeSut();
      const prefix = 'app';

      const result = await sut.generateUniqueIdWithPrefix(prefix);

      expect(result).toContain('app-');
    });
  });
});
