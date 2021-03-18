using System.Collections.Generic;
using System.Threading.Tasks;
using DataBox.Entities.ExternalStorage;
using DataBox.Models.Storage;

namespace DataBox.Services.ExternalStorage
{
    public interface IStorageService
    {
        Task<Storage> Get();
        Task<ActionResponse> Add(IEnumerable<Item> items);
        Task<ActionResponse> GetByDestinations(IEnumerable<string> destinations);
    }
}