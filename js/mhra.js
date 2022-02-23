/*
Template Name: Pccims;
Template URI:http://pccims.com.np/
Author: Prem Prasad Khanal
Author URI: http://premkhanal.com.np/
Description: Pccims Portal. 
Version: 1.0.0
Primary use: Digital platform
*/

$winHeight = $(window).innerHeight();
$dhHeight = $('.dashboard-header').height();
$cropWidth = $('.crop-calendar').width();
$mainContentMargin = $('.main-content-wrap, .backend-md-sidebar').css({
  'padding-top': $dhHeight + 15,
});
$sidebarTop = $('.fix-sidebar').css({ top: $dhHeight + 15 });
$('.pm-calendar').css({ 'max-width': $cropWidth });

$(document).ready(function () {
  setTimeout(
    function () {
      $('.is-animation').addClass('is-active');
    },

    500
  );

  function switcher() {
    $('.switcher-wrapper span').on('click', function () {
      $(this).closest('.switcher-wrapper').toggleClass('is-active');
      $('.switcher-wrapper span').removeClass('is-active');
      $(this).toggleClass('is-active');
    });
  }

  /*==================================
   Toggle Button
 ==================================*/
  $('.toggle-button').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('Is-toggle');
    $(this).toggleClass('active');
  });

  /*==================================
   Dashboard menu icon
 ==================================*/
  $('.mobile-menu-icon').on('click', function (e) {
    e.preventDefault();
    $('.dbd-sidebar').toggleClass('dbd-sidebar_active');
    $('.dbd-cntr').toggleClass('dbd-cntr_active');
  });

  // function pmTab() {
  //   $('.pm-tab ul.tab-list a').click(function (e) {
  //     e.preventDefault();
  //     console.log('click');
  //     var tab_id = $(this).attr('data-tab');

  //     $('.pm-tab ul.tab-list li a').removeClass('is-active');
  //     $('.pm-tab-content .tab-item').removeClass('is-active');

  //     $(this).addClass('is-active');
  //     $('#' + tab_id).addClass('is-active');
  //   });
  // }

  $(function () {
    var $ul = $('.dbd-sidebar .menu > ul');

    $ul.find('li a').click(function (e) {
      var $li = $(this).parent();

      if ($li.find('ul').length > 0) {
        e.preventDefault();

        if ($li.hasClass('is-active')) {
          $li.removeClass('is-active').find('li').removeClass('is-active');
          $li.find('ul').slideUp(400);
        } else {
          if ($li.parents('li.is-active').length == 0) {
            $ul.find('li').removeClass('is-active');
            $ul.find('ul').slideUp(400);
          } else {
            $li.parent().find('li').removeClass('is-active');
            $li.parent().find('> li ul').slideUp(400);
          }

          $li.addClass('is-active');
          $li.find('>ul').slideDown(400);
        }
      }
    });

    $('.dbd-sidebar .menu > ul ul').each(function (i) {
      if ($(this).find('>li>ul').length > 0) {
        var paddingLeft = $(this)
          .parent()
          .parent()
          .find('>li>a')
          .css('padding-left');
        var pIntPLeft = parseInt(paddingLeft);
        var result = pIntPLeft + 20;

        $(this).find('>li>a').css('padding-left', result);
      } else {
        var paddingLeft = $(this)
          .parent()
          .parent()
          .find('>li>a')
          .css('padding-left');
        var pIntPLeft = parseInt(paddingLeft);
        var result = pIntPLeft + 20;

        $(this)
          .find('>li>a')
          .css('padding-left', result)
          .parent()
          .addClass('is-active--last');
      }
    });

    var t = ' li > ul ';

    for (var i = 1; i <= 10; i++) {
      $('.dbd-sidebar .menu > ul > ' + t.repeat(i)).addClass('ml-menu' + i);
    }

    var activeLi = $('li.is-active');

    if (activeLi.length) {
      opener(activeLi);
    }

    function opener(li) {
      var ul = li.closest('ul');

      if (ul.length) {
        li.addClass('is-active');
        ul.addClass('open');

        if (ul.closest('li').length) {
          opener(ul.closest('li'));
        } else {
          return false;
        }
      }
    }
  });

  // pm-select

  function pmSelect() {
    $('.pm-select').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('pm-select_show');
    });

    $('.pm-select li').on('click', function (e) {
      e.preventDefault();
      $(this).removeClass('is-active');
      var value = $(this).attr('data-value');
      $(this)
        .closest('.pm-select')
        .find('.pm-select_item')
        .addClass('is-active');
      $(this).closest('.pm-select').find('.pm-select_item').html(value);
    });
  }

  function pmDropdown() {
    $('.pm-dropdown').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.pm-dropdown').addClass('pm-dropdown_show');
    });
  }

  function openModal() {
    $('.is-btn').on('click', function (e) {
      e.preventDefault();
      console.log('click');
      var targetId = $(this).attr('modal-link');
      $('#' + targetId).addClass('pm-modal_show');
    });
  }

  function closeModal() {
    $('.pm-modal_footer .is-btn, .pm-modal_close').on('click', function (e) {
      e.preventDefault();
      $(this).closest('.pm-modal').removeClass('pm-modal_show');
    });
  }

  function equalHeight() {
    var highestBox = 0;

    $('.major-features-card .card-box').each(function () {
      if ($(this).height() > highestBox) {
        highestBox = $(this).height();
      }
    });
    $('.major-features-card .card-box').height(highestBox);
  }

  $('.single-slider').slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    infinite: true,
  });

  /*====================================
          // menu-fix
          ======================================*/

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 30) {
      $('.dashboard-header ').addClass('is-fixed', 500);
    } else {
      $('.dashboard-header ').removeClass('is-fixed', 500);
    }
  });

  $(function () {
    'use strict';
    switcher();
    pmSelect();
    openModal();
    closeModal();
    pmDropdown();
    equalHeight();
    showMenu();
  });
});
