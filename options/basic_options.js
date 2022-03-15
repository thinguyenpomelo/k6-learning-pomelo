import http from 'k6/http';
import { sleep } from 'k6';
export const options = {
  vus: 10,
  duration: '10s',
  ext: {
    loadimpact: {
      projectID: 3574814,
      // Test runs with the same name groups test runs together
      name: "Thi"
    }
  }
};
export default function () {
  http.get('http://test.k6.io');
  sleep(1);
}
