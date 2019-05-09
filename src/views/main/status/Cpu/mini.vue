<template>
  <g2-mini>
    <div
      ref="chartMini"
      slot="left"></div>
    <template slot="right">
      <p>内存 ({{ percentage }})</p>
      <p>{{ applymem | gb }}/{{ ram.totalmem | gb }} GB</p>
    </template>
  </g2-mini>
</template>

<script>
import G2 from '@antv/g2';

import G2Mini from '@/components/main/status/g2-mini.vue';

export default {
  data() {
    return {
      g2Chart: null,
      ram: {},
      data: [],
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
        container: this.$refs.chartMini,
        forceFit: true,
        height: 60,
        padding: 0,
        background: {
          stroke: '#8b12ae',
        },
        animate: false,
      });
      this.g2Chart.source(this.data, {
        value: {
          min: 0,
          max: 100,
        },
        time: {
          min: 0,
          max: 120,
        },
      });
      this.g2Chart.axis('time', {
        label: null,
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
      if (!arr.length) {
        arr.push({
          value: 0,
          time: 1,
        });
        arr.push({
          value: parseFloat(this.percentage),
          time: 0,
        });
      } else {
        arr.push({
          time: 0,
          value: parseFloat(this.percentage),
        });
      }
      this.data = arr;
      this.g2Chart.changeData(this.data);
    },
  },
  mounted() {
    this.handleG2Init();
  },
  components: {
    G2Mini,
  },
};
</script>
