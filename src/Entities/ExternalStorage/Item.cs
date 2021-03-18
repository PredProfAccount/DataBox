using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace DataBox.Models.Storage
{
    public class Item
    {
        [JsonPropertyName("uuid")]
        public string Guid { get; set; }

        [JsonPropertyName("destination")]
        public List<string> Destination { get; set; }
    }
}