const Button = ({ label, onPress, style }) => (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styles.textBtn}>{label}</Text>
    </TouchableOpacity>
  );
  