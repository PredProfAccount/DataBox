using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DataBox.Entities.ExternalStorage
{
    public class Storage
    {
        [JsonPropertyName("size")]
        public Size Size { get; set; }

        [JsonIgnore]
        public bool IsFilled { get; set; }

        [JsonPropertyName("merged")]
        public List<List<string>> Merged { get; set; }
    }

    public class Size
    {
        [JsonPropertyName("size_x")]
        public int SizeX { get; set; }

        [JsonPropertyName("size_y")]
        public int SizeY { get; set; }

        [JsonPropertyName("size_z")]
        public int SizeZ { get; set; }
    }
}
