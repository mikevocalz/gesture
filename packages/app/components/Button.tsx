import { Text, Pressable} from 'react-native';

interface ButtonProps {
  onPress?: () => void;
  title: string;
  className: string
}
export const Button = ({ onPress, title, className }: ButtonProps) => {
  return (
    <Pressable className={styles.button} onPress={onPress}>
      <Text className={className} {...className}>{title}</Text>
    </Pressable>
  );
};

const styles = {
  button: 'flex shadow-md p-4',
  buttonText: 'text-center',
};
