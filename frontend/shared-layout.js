(function () {
  var navItems = [
    { key: "home", label: "Home", icon: "home", href: "#" },
    { key: "visualization", label: "Dataset Visualization", icon: "visibility", href: "#" },
    { key: "benchmark", label: "Benchmark", icon: "leaderboard", href: "#" },
    { key: "detection", label: "Detection Review", icon: "magnification_small", href: "#" },
    { key: "export", label: "Export", icon: "ios_share", href: "#" },
    { key: "settings", label: "Settings", icon: "settings", href: "#" }
  ];

  function buildSidebarFooter(sidebarConfig) {
    var footerType = sidebarConfig.footerType || "none";

    if (footerType === "system-status") {
      return [
        '<div class="p-4 mt-auto">',
        '<div class="bg-primary-container/30 p-4 rounded-xl">',
        '<p class="text-[10px] uppercase tracking-widest font-bold text-primary mb-2">System Status</p>',
        '<div class="flex items-center gap-2">',
        '<div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>',
        '<span class="text-xs font-semibold text-on-primary-container">Cloud Sync Active</span>',
        '</div>',
        '</div>',
        '</div>'
      ].join("");
    }

    if (footerType === "settings-link") {
      var settingsBaseClass = sidebarConfig.navBaseClass || "flex items-center gap-3 px-4 py-3 text-[#5f5c78] dark:text-slate-400 hover:text-[#00345e] hover:bg-[#eff4ff]/50 dark:hover:bg-slate-800 transition-all font-medium text-sm";
      var settingsActiveClass = sidebarConfig.navActiveClass || "flex items-center gap-3 px-4 py-3 bg-[#eff4ff] dark:bg-slate-900 text-[#005ac2] dark:text-blue-400 rounded-r-full font-medium text-sm";
      var settingsLinkClass = sidebarConfig.active === "settings" ? settingsActiveClass : settingsBaseClass;
      var settingsIconClass = (sidebarConfig.iconClass || "material-symbols-outlined") + (sidebarConfig.iconSpacingClass || " mr-3");
      var settingsFillStyle = sidebarConfig.active === "settings" ? " style=\"font-variation-settings: 'FILL' 1\"" : "";
      var settingsLabelClass = sidebarConfig.labelClass || "";

      return [
        '<div class="p-4 mt-auto">',
        '<a class="',
        settingsLinkClass,
        '" href="#">',
        '<span class="',
        settingsIconClass,
        '"',
        settingsFillStyle,
        '>settings</span>',
        '<span class="',
        settingsLabelClass,
        '">Settings</span>',
        '</a>',
        '</div>'
      ].join("");
    }

    if (footerType === "admin-profile") {
      return [
        '<div class="p-6">',
        '<div class="bg-surface-container-low p-4 rounded-xl">',
        '<div class="flex items-center gap-3">',
        '<img alt="User Profile" class="w-10 h-10 rounded-full border border-outline-variant/30" src="',
        sidebarConfig.footerAvatarSrc || "",
        '" />',
        '<div>',
        '<p class="text-xs font-bold">Admin Panel</p>',
        '<p class="text-[10px] text-on-surface-variant">System Architect</p>',
        '</div>',
        '</div>',
        '</div>',
        '</div>'
      ].join("");
    }

    if (footerType === "user-chip") {
      return [
        '<div class="p-4 mb-4 mx-4 bg-[#eff4ff] rounded-xl">',
        '<div class="flex items-center gap-3">',
        '<div class="w-8 h-8 rounded-full bg-[#005ac2] flex items-center justify-center text-white text-xs font-bold">JD</div>',
        '<div>',
        '<p class="text-xs font-bold">James Dalton</p>',
        '<p class="text-[10px] text-[#5f5c78]">System Architect</p>',
        '</div>',
        '</div>',
        '</div>'
      ].join("");
    }

    return "";
  }

  function renderSidebar(sidebarConfig) {
    var activeKey = sidebarConfig.active || "home";
    var includeSettingsInNav = sidebarConfig.includeSettingsInNav !== false;
    var navBaseClass = sidebarConfig.navBaseClass || "flex items-center gap-3 px-4 py-3 text-[#5f5c78] dark:text-slate-400 hover:text-[#00345e] hover:bg-[#eff4ff]/50 dark:hover:bg-slate-800 transition-all font-medium text-sm";
    var navActiveClass = sidebarConfig.navActiveClass || "flex items-center gap-3 px-4 py-3 bg-[#eff4ff] dark:bg-slate-900 text-[#005ac2] dark:text-blue-400 rounded-r-full font-medium text-sm";
    var iconClass = sidebarConfig.iconClass || "material-symbols-outlined";
    var iconSpacingClass = sidebarConfig.iconSpacingClass || "";
    var labelClass = sidebarConfig.labelClass || "";

    var navMarkup = navItems
      .filter(function (item) {
        return includeSettingsInNav || item.key !== "settings";
      })
      .map(function (item) {
        var isActive = item.key === activeKey;
        var itemClass = isActive ? navActiveClass : navBaseClass;
        var fillStyle = isActive ? " style=\"font-variation-settings: 'FILL' 1\"" : "";

        return [
          '<a class="',
          itemClass,
          '" href="',
          item.href,
          '">',
          '<span class="',
          iconClass,
          iconSpacingClass,
          '"',
          fillStyle,
          '>',
          item.icon,
          '</span>',
          '<span class="',
          labelClass,
          '">',
          item.label,
          '</span>',
          '</a>'
        ].join("");
      })
      .join("");

    return [
      '<div class="',
      sidebarConfig.brandClass || "px-6 py-8",
      '">',
      '<h1 class="',
      sidebarConfig.brandTitleClass || "text-lg font-black text-[#00345e] dark:text-blue-50 tracking-tight",
      '">Industrial Intelligence</h1>',
      '<p class="',
      sidebarConfig.brandSubTitleClass || "text-xs font-medium text-on-surface-variant opacity-70",
      '">PCB Analytics v2.4</p>',
      '</div>',
      '<nav class="flex-1 px-4 space-y-1">',
      navMarkup,
      '</nav>',
      buildSidebarFooter(sidebarConfig)
    ].join("");
  }

  function buildTopbarSearch(searchConfig) {
    if (!searchConfig) {
      return "";
    }

    if (searchConfig.variant === "inline") {
      return [
        '<div class="',
        searchConfig.containerClass,
        '">',
        '<span class="material-symbols-outlined ',
        searchConfig.iconClass,
        '">search</span>',
        '<input class="',
        searchConfig.inputClass,
        '" placeholder="',
        searchConfig.placeholder || "Search...",
        '" type="text" />',
        '</div>'
      ].join("");
    }

    return [
      '<div class="',
      searchConfig.containerClass,
      '">',
      '<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 ',
      searchConfig.iconClass,
      '">search</span>',
      '<input class="',
      searchConfig.inputClass,
      '" placeholder="',
      searchConfig.placeholder || "Search...",
      '" type="text" />',
      '</div>'
    ].join("");
  }

  function buildTopbarActions(topbarConfig) {
    var actionButtonClass = topbarConfig.actionButtonClass || "btn-icon p-2 hover:bg-[#eff4ff] dark:hover:bg-slate-800 rounded-full transition-colors text-[#306197]";
    var dotClass = topbarConfig.notificationDotClass || "absolute top-2 right-2 w-2 h-2 bg-error rounded-full";

    var actions = [
      '<button class="' + actionButtonClass + '">',
      '<span class="material-symbols-outlined">filter_list</span>',
      '</button>',
      '<button class="' + actionButtonClass + '">',
      '<span class="material-symbols-outlined">contrast</span>',
      '</button>',
      '<button class="' + actionButtonClass + ' relative">',
      '<span class="material-symbols-outlined">notifications</span>',
      '<span class="' + dotClass + '"></span>',
      '</button>'
    ];

    if (topbarConfig.showAvatar) {
      actions.push(
        '<div class="' + (topbarConfig.avatarWrapperClass || "h-8 w-8 rounded-full overflow-hidden") + '">',
        '<img alt="' + (topbarConfig.avatarAlt || "User Profile") + '" class="' + (topbarConfig.avatarImageClass || "w-full h-full object-cover") + '" src="' + (topbarConfig.avatarSrc || "") + '" />',
        '</div>'
      );
    }

    return actions.join("");
  }

  function renderTopbar(topbarConfig) {
    var leftSegments = [];

    if (topbarConfig.titleText) {
      leftSegments.push('<div class="' + (topbarConfig.titleClass || "text-xl font-bold text-[#00345e] dark:text-blue-100") + '">' + topbarConfig.titleText + "</div>");
    }

    if (topbarConfig.showDivider) {
      leftSegments.push('<div class="h-6 w-px bg-outline-variant/20 mx-2"></div>');
    }

    leftSegments.push(buildTopbarSearch(topbarConfig.search));

    return [
      '<div class="',
      topbarConfig.leftClass || "flex items-center gap-6",
      '">',
      leftSegments.join(""),
      '</div>',
      '<div class="',
      topbarConfig.rightClass || "flex items-center gap-4",
      '">',
      buildTopbarActions(topbarConfig),
      '</div>'
    ].join("");
  }

  window.renderSharedLayout = function (layoutConfig) {
    var sidebarHost = document.getElementById("app-sidebar");
    var topbarHost = document.getElementById("app-topbar");

    if (!sidebarHost || !topbarHost) {
      return;
    }

    sidebarHost.innerHTML = renderSidebar(layoutConfig.sidebar || {});
    topbarHost.innerHTML = renderTopbar(layoutConfig.topbar || {});
  };
})();
