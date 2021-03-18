using DataBox.Entities.ExternalStorage;
using DataBox.Models.Storage;
using DataBox.Repositories.ExternalStorage;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataBox.Services.ExternalStorage
{
    public class HttpStorageService : IStorageService
    {
        private Storage _storage;
        private readonly IStorageRepository _storageRepository;

        public HttpStorageService(IStorageRepository storageRepository)
        {
            _storageRepository = storageRepository;
            _storage = new Storage();
        }

        public async Task<Storage> Get()
        {
            if (!_storage.IsFilled)
            {
                _storage = await _storageRepository.Get();
                _storage.IsFilled = true;
            }

            return _storage;
        }

        public async Task<ActionResponse> Add(IEnumerable<Item> items)
        {
            // TODO: Implement custom logic for storing items.
            var response = await _storageRepository.Add(items);

            if (response.Status == ResponseStatus.Error)
                throw new Exception("Can't add this item into the storage!");

            return response;
        }

        public async Task<ActionResponse> GetByDestinations(IEnumerable<string> destinations)
        {
            var response = await _storageRepository.GetByDestinations(destinations);

            if (response.Status == ResponseStatus.Error)
                throw new Exception("Can't fetch item from the storage!");

            return response;
        }
    }
}
