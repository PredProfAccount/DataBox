using DataBox.Models.Storage;
using DataBox.Services.ExternalStorage;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataBox.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StorageController : ControllerBase
    {
        private readonly IStorageService _storageService;

        public StorageController(IStorageService storageService)
        {
            _storageService = storageService;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _storageService.Get());
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] List<Item> items)
        {
            var response = await _storageService.Add(items);

            if (response.Status == ResponseStatus.Error)
                return BadRequest(new { message = "Can't add this item into the storage!" });

            return Ok();
        }

        [HttpGet("/position")]
        public async Task<IActionResult> GetByDestinations([FromBody] List<string> destinations)
        {
            var response = await _storageService.GetByDestinations(destinations);
            
            if (response.Status == ResponseStatus.EmptyPosition)
                return BadRequest(new { message = "This position is empty!" });

            return Ok();
        }
    }
}
