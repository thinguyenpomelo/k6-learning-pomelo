## Documentations
- Video and Slides: https://drive.google.com/drive/folders/1WPPn0BEXz0A62GIxKNPM93bjyiulj0zn
- K6 documentations page: https://k6.io/docs/

## Folder Structure
- .github: for yaml files for github action demo
- check: include check_script.js is example of check method in k6
- environment_variables: include environment_variables.js is example of how to use environment_variable
- options: include basic_options.js is example of how to use options and how to implement dashboard cloud of k6
- thresholds: include threshold.js is basic threshold and threshold_groups.js is how to use threshold group in k6
- script.js: basic script to run demo in k6

## Practice time
- Please clone this repo and make your own branch call: k6_<your_name>_practice
- Excercise 1: Please make script from k6 to check performance of pre-prod pomelo page: https://www-pre-production.pmlo.co/th/en/ (with condition: 2 virtual machine and duration is 5 seconds)
- Excercise 2: Please make script from k6 to check 
   - Run of pre-prod pomelo page: https://www-pre-production.pmlo.co/th/en/ (with condition: 1 virtual machine and duration is 10 seconds)
   - Threshold are : http errors should be less than 1%, 95% of requests should be below 300ms, 99% of requests should be below 1000ms
   - Run and display your test on cloud and dashboard