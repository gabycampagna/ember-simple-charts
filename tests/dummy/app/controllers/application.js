import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  donutData: [
    {
      label: 'Super Cool',
      data: 100
    },
    {
      label: 'Very Cool',
      data: 200
    },
  ],
  pieData: [
    {
      label: 'Totally Cool',
      data: 300
    },
    {
      label: 'Way Cool',
      data: 200
    },
    {
      label: 'Cucumber Cool',
      data: 400
    },
    {
      label: 'So Cool',
      data: 500
    },
  ],
  barData: [
    {
      label: 'Totally Cool',
      data: 300
    },
    {
      label: 'Way Cool',
      data: 200
    },
    {
      label: 'Cucumber Cool',
      data: 400
    },
    {
      label: 'So Cool',
      data: 500
    },
  ],
  horzData: [
    {
      label: 'Mark',
      data: 150
    },
    {
      label: 'John',
      data: 200
    },
    {
      label: 'Kathy',
      data: 300
    },
    {
      label: 'Jeff',
      data: 350
    },
    {
      label: 'Joe',
      data: 100
    },
    {
      label: 'Kelly',
      data: 200
    },
    {
      label: 'Kathy',
      data: 450
    },
    {
      label: 'Jason',
      data: 350
    }
  ],
  lineData: [
    {
      label: '0',
      data: 0
    },
    {
      label: '10',
      data: 20
    },
    {
      label: '20',
      data: 30
    },
    {
      label: '30',
      data: 60
    },
    {
      label: '40',
      data: 70
    },
    {
      label: '70',
      data: 90
    }
  ]
});
