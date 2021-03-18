using DataBox.Entities.ExternalStorage;
using DataBox.Models.Storage;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataBox.Repositories.ExternalStorage
{
    public interface IStorageRepository
    {
        Task<Storage> Get();
        Task<ActionResponse> Add(IEnumerable<Item> items);
        Task<ActionResponse> GetByDestinations(IEnumerable<string> destinations);
    }
}