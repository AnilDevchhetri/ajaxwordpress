(function($){
  $(document).ready(function(){
     $(document).on('submit','[data-js-form=filter]',function(e){
 
        e.preventDefault();
        var data = $(this).serialize();
        
        $('[data-js-filter=target]').html('<h3>Looading...</h3>');

        $.ajax({
          url: wpAjax.ajaxUrl,
          data:data,
          type:'post',
          success:function(result){
            $('[data-js-filter=target]').html(result);
          },
          error:function(result){
            console.warn(result);
             $('[data-js-filter=target]').html('<h3>Something went wrong</h3>');
          },
        })

       })
  });
})(jQuery);