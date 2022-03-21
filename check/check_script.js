import { check } from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('http://test.k6.io/');
  /**
   * One assert
   */
    check(res, {
       'is status 200': (r) => r.status === 200,
    });

  /**
   * Multiple assert
   */

    check(res, {
        'verify homepage text': (r) =>
                                    r.body.includes('Collection of simple web-pages suitable for load testing'),
       'body size is 11,105 bytes': (r) => 
                                    r.body.length == 11105,                             
     });

     /* testing */
   
}
