﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ipdms.Models
{
    public class IpdmsFile
    {
        [JsonPropertyName("image64")]
        public string image64 { get; set; }

    }
}