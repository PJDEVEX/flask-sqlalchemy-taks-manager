document.addEventListener('DOMContentLoaded', function() {
    
    // sidenav initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    //  datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "mmm dd, yyyy",
      i18n: {done: "Select"}
    });

    // category selection initialisation
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // Task description collapsable initialization
    let collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
  });