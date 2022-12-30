﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace App.MVC.Models.EFModel;

[Table("tblType2ContentAfter")]
public partial class TblType2ContentAfter
{
    [Key]
    [Column("cId")]
    public int CId { get; set; }

    [Column("cTitle")]
    [StringLength(50)]
    public string CTitle { get; set; } = null!;

    [Column("cContent")]
    public string? CContent { get; set; }

    [Column("cEditorId")]
    public int CEditorId { get; set; }

    [Column("cCreateDt", TypeName = "datetime")]
    public DateTime CCreateDt { get; set; }

    [Column("cEditDt", TypeName = "datetime")]
    public DateTime CEditDt { get; set; }

    [Column("cCreatorId")]
    public int CCreatorId { get; set; }

    [Required]
    [Column("cIsEnabled")]
    public bool? CIsEnabled { get; set; }

    [Column("cThumbnailUrl")]
    [StringLength(200)]
    public string CThumbnailUrl { get; set; } = null!;

    [Column("cImageUrl")]
    [StringLength(200)]
    public string CImageUrl { get; set; } = null!;

    [Column("cUnitId")]
    public int CUnitId { get; set; }
}
