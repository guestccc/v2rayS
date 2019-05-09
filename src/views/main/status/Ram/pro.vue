<template>
  <g2-pro>
    <div ref="chartPro"></div>
  </g2-pro>
</template>

<script>
import G2 from '@antv/g2';

import G2Pro from '@/components/main/status/g2-pro.vue';

export default {
  data() {
    return {
      g2Chart: null,
      ram: {},
      data: [{
        time: 0,
        value: 0,
      }],
    };
  },
  computed: {
    applymem() {
      const { totalmem = 0, freemem = 0 } = this.ram;
      return totalmem - freemem;
    },
    percentage() {
      const { applymem = 0 } = this;
      const { totalmem = 1 } = this.ram;
      return `${(applymem / totalmem * 100).toFixed(2)}%`;
    },
  },
  methods: {
    handleData(v) {
      this.ram = v;
      this.handleUpdateChart();
    },
    handleG2Init() {
      this.g2Chart = new G2.Chart({
        container: this.$refs.chartPro,
        forceFit: true,
        height: 600,
        padding: [10, 30, 30, 10],
        background: {
          fill: '#ffffff',
        },
        animate: false,
      });
      this.g2Chart.source(this.data, {
        value: {
          min: 0,
          max: 100,
          ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        },
        time: {
          min: 0,
          max: 120,
          ticks: [0, 30, 60, 90, 120],
        },
      });
      this.g2Chart.axis('value', {
        line: {
          stroke: '#8b12ae',
        },
      });
      this.g2Chart.axis('time', {
        line: {
          stroke: '#8b12ae',
        },
      });
      this.g2Chart.coord().reflect('x');
      this.g2Chart.tooltip(false);
      this.g2Chart.area().position('time*value').color('#e3d4e6');
      this.g2Chart.line().position('time*value').color('#8b12ae');
      this.g2Chart.render();
    },
    handleUpdateChart() {
      if (this.data.length > 120) this.data.shift();
      const arr = [];
      this.data.forEach((item) => {
        arr.push({
          ...item,
          time: item.time + 1,
        });
      });
      arr.push({
        time: 0,
        value: parseFloat(this.percentage),
      });
      this.data = arr;
      this.g2Chart.changeData(this.data);
    },
  },
  mounted() {
    this.handleG2Init();
  },
  components: {
    G2Pro,
  },
};
</script>
