using DataBox.Entities.ExternalStorage;
using DataBox.Models.Storage;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataBox.Repositories.ExternalStorage
{
    public class StorageRepository : IStorageRepository
    {
        public Storage Storage { get; }
        public StorageOptions Options { get; }

        public StorageRepository(IOptions<StorageOptions> options)
        {
            Options = options.Value;
        }

        public StorageRepository SetStorageSize(Size size)
        {
            if (size.SizeX > 0 && size.SizeY > 0 && size.SizeZ > 0)
            {
                Storage.Size = size;
            }

            return this;
        }

        public string SetCellName(int x, int y)
        {
            return char.ConvertFromUtf32((int)char.GetNumericValue((char)x) + 16) + y.ToString();
        }

        public Task<ActionResponse> Add(IEnumerable<Item> items)
        {
            throw new NotImplementedException();
        }

        public Task<Storage> Get()
        {
            throw new NotImplementedException();
        }

        public Task<ActionResponse> GetByDestinations(IEnumerable<string> destinations)
        {
            throw new NotImplementedException();
        }
    }

    public class StorageOptions
    {
        public int MinSize { get; set; } = 3;
        public int MaxSize { get; set; } = 9;
        public int MinMergedCells { get; set; } = 2;
        public int QuadCells { get; set; } = 4;
        public int DoubleCells { get; set; } = 2;
    }
}
