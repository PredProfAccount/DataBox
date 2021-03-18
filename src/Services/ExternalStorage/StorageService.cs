using DataBox.Entities.ExternalStorage;
using DataBox.Models.Storage;
using DataBox.Repositories.ExternalStorage;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataBox.Services.ExternalStorage
{
    public class StorageService : IStorageService
    {
        private readonly IStorageRepository _storageRepository;

        public StorageService(IStorageRepository storageRepository)
        {
            _storageRepository = storageRepository;
        }

        public Task<Storage> Get()
        {
            throw new NotImplementedException();
        }

        public Task<ActionResponse> Add(IEnumerable<Item> items)
        {
            throw new NotImplementedException();
        }

        public Task<ActionResponse> GetByDestinations(IEnumerable<string> destinations)
        {
            throw new NotImplementedException();
        }
    }
}
