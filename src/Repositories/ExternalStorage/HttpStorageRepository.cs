using DataBox.Entities.ExternalStorage;
using DataBox.Models.Storage;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace DataBox.Repositories.ExternalStorage
{
    public class HttpStorageRepository : IStorageRepository
    {
        private readonly IHttpClientFactory _httpClientFactory;

        public HttpStorageRepository(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        public async Task<Storage> Get()
        {
            var client = _httpClientFactory.CreateClient("ExternalStorage");
            var content = await client.GetStringAsync("scheme");

            var storage = JsonSerializer.Deserialize<Storage>(content);

            return storage;
        }

        public async Task<ActionResponse> Add(IEnumerable<Item> items)
        {
            var content = JsonSerializer.Serialize(items);
            var httpContent = new StringContent(content);

            var client = _httpClientFactory.CreateClient("ExternalStorage");
            var httpResponse = await client.PostAsync(string.Empty, httpContent);

            string responseStatus = await httpResponse.Content.ReadAsStringAsync();

            return new ActionResponse(responseStatus);
        }

        public async Task<ActionResponse> GetByDestinations(IEnumerable<string> destinations)
        {
            var content = JsonSerializer.Serialize(destinations);
            var httpContent = new StringContent(content);

            var client = _httpClientFactory.CreateClient("ExternalStorage");
            var httpResponse = await client.PostAsync("position", httpContent);

            string responseStatus = await httpResponse.Content.ReadAsStringAsync();

            return new ActionResponse(responseStatus);
        }
    }
}
