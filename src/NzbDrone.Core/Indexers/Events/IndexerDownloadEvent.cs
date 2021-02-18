using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NzbDrone.Common.Messaging;

namespace NzbDrone.Core.Indexers.Events
{
    public class IndexerDownloadEvent : IEvent
    {
        public int IndexerId { get; set; }
        public bool Successful { get; set; }

        public IndexerDownloadEvent(int indexerId, bool successful)
        {
            IndexerId = indexerId;
            Successful = successful;
        }
    }
}