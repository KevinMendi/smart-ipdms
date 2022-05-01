USE [IpdmsDb]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DocumentPage](
	[document_page_id] [int] IDENTITY(1,1) NOT NULL,
	[document_id] [int] NOT NULL,
	[path] [varchar](max) NOT NULL,
 CONSTRAINT [PK_DocumentPage] PRIMARY KEY CLUSTERED 
(
	[document_page_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]