function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let sidebarButton = document.getElementById("sidebar-button");

    if (sidebar.className == "") {
        sidebar.style.display = "block";
        sidebar.className = "s-close";
        // Show closing arrow
        sidebarButton.className = "sb-close";
    } else {
        sidebar.className = "";
        sidebarButton.className = sidebarButton.className = "";
    }
}