import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CircularProgress from './CircularProgress';
import { ChevronRight } from 'lucide-react-native';

interface ActivityCardProps {
  title: string;
  progress: number;
  metric: string;
  metricValue: string;
  progressColor?: string;
  onPress?: () => void;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  progress,
  metric,
  metricValue,
  progressColor = '#3B82F6',
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.metric}>
            <Text style={styles.metricValue}>{metricValue}</Text> {metric}
          </Text>
        </View>
        <View style={styles.rightContent}>
          <CircularProgress
            size={60}
            strokeWidth={6}
            progress={progress}
            progressColor={progressColor}
          />
          <ChevronRight size={20} color="#94A3B8" style={styles.chevron} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1F2937',
    marginBottom: 4,
  },
  metric: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
  },
  metricValue: {
    fontFamily: 'Inter-SemiBold',
    color: '#1F2937',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chevron: {
    marginLeft: 8,
  },
});

export default ActivityCard;