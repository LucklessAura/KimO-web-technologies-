<?php
  $conn = oci_connect('STUDENT','STUDENT','localhost/XE');
  if(!$conn)
  {
      echo '-2';
      die;
  }
  session_start();
  $userId = $_SESSION['userId'];
  $location = $_POST['coords'];
  echo '+'.$userId.'+';
  $sql = 'BEGIN update supervisors set lastupdate = systimestamp,location = :location where id = :uid; END;';
  $stmt = oci_parse($conn,$sql);
  oci_bind_by_name($stmt,':uid',$userId,32);
  oci_bind_by_name($stmt,':location',$location,60);
  oci_execute($stmt);
  echo '1';
  die;
  ?>