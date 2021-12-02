using System.Text.Json.Serialization;

namespace Kerrysiamseaport.Externalepod.Models
{
    public class ResultData
    {
   
        public dynamic Result { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public dynamic ResultPage { get; set; }

        public int StatusCode { get; set; }

        [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
        public string Message { get; set; }

    }
}