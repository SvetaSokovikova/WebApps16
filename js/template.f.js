function form_admin_comment(key, name, comment) {
    var $newTr = $("#new_offer_table").find(".answer_offer_form").clone(true,true);
    
    $newTr.find(".service_key").text(key);
    $newTr.find(".service_name").text(name);
    $newTr.find(".service_user_comment").text(comment);
    
    $newTr.removeAttr("style").removeClass("answer_offer_form");
    
    return $newTr;
}

function new_admin_offer_tr(key, name, comment) {


    var $newTr = $("#new_offer_table").find(".service_template").clone(true,true);

    $newTr.find(".service_key").text(key);
    $newTr.find(".service_name").text(name);
    $newTr.find(".service_user_comment").text(comment);

    $newTr.removeAttr("style").removeClass("service_template");

    return $newTr;

}

function new_offer_with_comment(key, name, comment, admin_comment) {
    


    var $newTr = $("#offer_with_answer_table").find(".service_template").clone(true,true);

    $newTr.find(".service_key").text(key);
    $newTr.find(".service_name").text(name);
    $newTr.find(".service_user_comment").text(comment);
    $newTr.find(".service_admin_comment").text(admin_comment);
    

    $newTr.removeAttr("style").removeClass("inactive_offer_template");

    return $newTr;
}

function new_inactive_offer_tr(key, name, comment, admin_comment) {


    var $newTr = $("#inactive_offer_table").find(".inactive_offer_template").clone(true,true);

    $newTr.find(".service_key").text(key);
    $newTr.find(".service_name").text(name);
    $newTr.find(".service_user_comment").text(comment);
    $newTr.find(".service_admin_comment").text(admin_comment);
    

    $newTr.removeAttr("style").removeClass("inactive_offer_template");

    return $newTr;

}


function new_offer_tr(key, name, comment) {
    var $newTr = $("#offer_service_table").find(".service_template");

    $newTr.find(".service_name").text(name);
    $newTr.find(".service_user_comment").text(comment);
    $newTr.find(".service_key").text(key);
    $newTr.removeClass("service_template").removeAttr("style");

    return $newTr;
}

function new_active_tr(key, name) {
    var $newTr = $("#active_service_table").find(".service_template").clone(true, true);
    $newTr.find("td.service_name").text(name);
    $newTr.find("td.service_key").text(key);
    $newTr.removeAttr("style").removeAttr("class");
    return $newTr;
}

function new_inactive_tr(key, name) {
    var $newTr = $("#inactive_service_table").find(".service_template").clone(true, true);
    $newTr.find("td.service_name").text(name);
    $newTr.find("td.service_key").text(key);
    $newTr.removeAttr("style").removeAttr("class");
    return $newTr;
}

function form_edit_active_service(key, name) {
    
    var $form = $("#active_service_table").find(".service_edit").clone(true, true);
    $form.removeAttr("style").removeClass("service_edit");
    $form.find("input.service_key").val(key);
    $form.find("input.service_name").val(name);
    $form.find("input.old_name").val(name);
    
    return $form;
}

function form_edit_inactive_service(key, name) {
    
    var $form = $("#inactive_service_table").find(".service_edit").clone(true, true);
    $form.removeAttr("style").removeClass("service_edit");
    $form.find("input.service_key").val(key);
    $form.find("input.service_name").val(name);
    $form.find("input.old_name").val(name);
    
    return $form;
}

function form_add_client_service(serviceKey, name) {
    
    var $form = $("#user_services_table").find(".client_service_add").clone(true, true);
    $form.removeClass("client_service_add").removeAttr("style");
    $form.find("input.service_key").val(serviceKey);
    $form.find("td.service_name").text(name);

    return $form;
}


function new_tr_service(key, name) {
    
    var $newTr =  $("#user_services_table").find(".service_template").clone(true, true);
    $newTr.find("td.service_key").text(key);
    $newTr.find("td.service_name").text(name);
    $newTr.removeAttr("style").removeAttr("class");
    
    return $newTr;

}


function new_tr_client_service(serviceKey, clientServiceKey, name, comment) {
    
    var $newTr = $("#user_services_table").find(".client_service_template").clone(true, true);
    $newTr.find("td.service_key").text(serviceKey);
    $newTr.find("td.client_service_key").text(clientServiceKey);
    $newTr.find("td.service_name").text(name);
    $newTr.find("td.service_comment").text(comment);
    $newTr.removeAttr("style").removeAttr("class");
    
    return $newTr;

}

function form_edit_client_service(serviceKey, clientServiceKey, name, comment) {
    var $form = $("#user_services_table").find(".client_service_edit").clone(true, true);
    $form.removeClass("client_service_edit").removeAttr("style");
    $form.find("input.service_key").val(serviceKey);
    $form.find("input.client_service_key").val(clientServiceKey);
    $form.find("input.old_comment").val(comment);
    $form.find("textarea.service_comment").val(comment);
    $form.find("td.service_name").text(name);
    
    return $form;

}