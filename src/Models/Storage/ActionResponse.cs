

using System.Text.Json;

namespace DataBox.Models.Storage
{
    public class ActionResponse
    {
        public ResponseStatus Status { get; set; }

        public ActionResponse(string content)
        {
            var status = JsonSerializer.Deserialize<ResponseMessage>(content);

            Status = GetStatus(status.Message);
        }

        private ResponseStatus GetStatus(string status) => status switch
        {
            "ok" => ResponseStatus.Ok,
            "error" => ResponseStatus.Error,
            "position is empty" => ResponseStatus.EmptyPosition,
            _ => ResponseStatus.Undefined
        };
    }

    public enum ResponseStatus
    {
        Ok,
        Error,
        EmptyPosition,
        Undefined
    }

    sealed class ResponseMessage
    {
        public string Message { get; set; }
    }
}
