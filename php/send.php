<?php
    $corpMail='support@recyclingservice.ru';
    $event=$_POST['event'];
    $name=$_POST['name'];
    $number=$_POST['number'];
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
    if(!is_null($event)){
        if($event=='call'){
            $headers .= "From: Заявка на обратный звонок <call@recyclingservice.ru>\r\n"; 
            $headers .= "Reply-To: reply-to@example.com\r\n";
            $messageCall='<p>Отправитель:<h1> '.$name.'</h1><br>Номер телефона:<h1>'.$number.'</h1></p>';
            if(mail($corpMail,'Заявка на обратный звонок',$messageCall,$headers)){
                echo 'SENDED';
            }else{
                echo 'ERROR';
            }
        }else if($event=='order'){
            $headers .= "From: Заявка на утилизацию <query@recyclingservice.ru>\r\n"; 
            $headers .= "Reply-To: reply-to@example.com\r\n";
            $mail=$_POST['mail'];
            $description=$_POST['description'];
            $messageOrder='<p>Отправитель:<h1>'.$name.'</h1><br>Номер телефона:<h1>'.$number.'</h1><br>E-mail:<h1>'.$mail.'</h1><br>Утилизируемое оборудование:<h1>'.$description.'</h1></p>';
            if(mail($corpMail,'Заявка на утилизацию',$messageOrder,$headers)){
                echo 'SENDED';
            }else{
                echo 'ERROR';
            }
        }else if($event=='cost'){
            $headers .= "From: Заявка на расчет стоимости <cost@recyclingservice.ru>\r\n"; 
            $headers .= "Reply-To: reply-to@example.com\r\n";
            $mail=$_POST['mail'];
            $description=$_POST['description'];
            $messageOrder='<p>Отправитель:<h1>'.$name.'</h1><br>Номер телефона:<h1>'.$number.'</h1><br>E-mail:<h1>'.$mail.'</h1><br>Утилизируемое оборудование:<h1>'.$description.'</h1></p>';
            if(mail($corpMail,'Заявка на расчет стоимости',$messageOrder,$headers)){
                echo 'SENDED';
            }else{
                echo 'ERROR';
            }
        }
    }else{
        echo 'ERROR';
    }
?>