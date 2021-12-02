namespace Kerrysiamseaport.Externalepod.Configuration
{
    public class AppSettings
    {
        public int ItemPerPage { get; set; }
        public FilePaths FilePaths { get; set; }
        public FileSize FileSize { get; set; }
        public MenuData Menu { get; set; }
        public Lang Lang { get; set; }

    }

    public class FilePaths
    {
        public string Root { get; set; }

    }

    public class FileSize
    {
        public string Image { get; set; }
        public string Video { get; set; }
        public string Document { get; set; }
    }

    public class MenuData
    {
        public string News { get; set; }
        public string Policy { get; set; }
        public string Form { get; set; }
        public string Elearning { get; set; }
        public string ElearningPermission { get; set; }
        public string Organization { get; set; }
        public string Calendar { get; set; }
        public string Survey { get; set; }
        public string LinkSystem { get; set; }

    }

    public class Lang
    {
        public string Thai { get; set; }
        public string English { get; set; }

    }
}