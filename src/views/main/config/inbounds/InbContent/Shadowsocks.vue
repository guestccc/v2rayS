<script>
export default {
  props: {
    row: {
      type: Object,
      default: () => (null),
    },
  },
  methods: {
  },
  render() {
    const {
      row,
    } = this;
    return row ? (<div>
      <p>password: {row.password}</p>
      <p>method: {row.method}</p>
      <p>network: {row.network || 'tcp'}</p>
      <p>email: {row.email || '无'}</p>
      <p>level: {row.level || 0}</p>
      <p>OTA: {row.level || 'auto'}</p>
    </div>) : null;
  },
};
</script>
