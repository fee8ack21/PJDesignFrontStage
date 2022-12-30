﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace App.MVC.Models.EFModel
{
    [Table("tblType1ContentAfter")]
    public partial class TblType1ContentAfter
    {
        [Key]
        [Column("cId")]
        public int CId { get; set; }
        [Column("cContent")]
        public string CContent { get; set; }
        [Column("cCreateDt", TypeName = "datetime")]
        public DateTime CCreateDt { get; set; }
        [Column("cEditDt", TypeName = "datetime")]
        public DateTime CEditDt { get; set; }
        [Column("cEditorId")]
        public int CEditorId { get; set; }
        [Column("cCreatorId")]
        public int CCreatorId { get; set; }
        [Column("cUnitId")]
        public int CUnitId { get; set; }
    }
}
