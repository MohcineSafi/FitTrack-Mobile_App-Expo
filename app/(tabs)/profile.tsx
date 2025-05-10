import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Settings, CircleUser as UserCircle, Bell, LogOut, Shield, Gift, CircleHelp as HelpCircle, HeartPulse, Target, Weight, Ruler } from 'lucide-react-native';
import ProfileSection from '@/components/ProfileSection';
import { userData } from '@/utils/mockData';

export default function ProfileScreen() {
  const accountItems = [
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings size={20} color="#3B82F6" />,
      onPress: () => console.log('Settings pressed'),
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: <Bell size={20} color="#3B82F6" />,
      onPress: () => console.log('Notifications pressed'),
    },
    {
      id: 'privacy',
      label: 'Privacy',
      icon: <Shield size={20} color="#3B82F6" />,
      onPress: () => console.log('Privacy pressed'),
    },
    {
      id: 'logout',
      label: 'Log Out',
      icon: <LogOut size={20} color="#EF4444" />,
      onPress: () => console.log('Log Out pressed'),
    },
  ];

  const supportItems = [
    {
      id: 'help',
      label: 'Help & Support',
      icon: <HelpCircle size={20} color="#3B82F6" />,
      onPress: () => console.log('Help pressed'),
    },
    {
      id: 'premium',
      label: 'Upgrade to Premium',
      icon: <Gift size={20} color="#F59E0B" />,
      onPress: () => console.log('Premium pressed'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.iconButton}>
          <Settings size={24} color="#1F2937" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            {userData.profileImage ? (
              <Image source={{ uri: userData.profileImage }} style={styles.profileImage} />
            ) : (
              <UserCircle size={80} color="#3B82F6" />
            )}
          </View>
          <Text style={styles.profileName}>{userData.name}</Text>
          <Text style={styles.profileEmail}>{userData.email}</Text>
          
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsItem}>
            <View style={styles.statsIconContainer}>
              <Target size={20} color="#3B82F6" />
            </View>
            <Text style={styles.statsLabel}>Goal</Text>
            <Text style={styles.statsValue}>
              {userData.fitnessGoal === 'gain_muscle' ? 'Gain Muscle' : 
               userData.fitnessGoal === 'lose_weight' ? 'Lose Weight' : 
               userData.fitnessGoal === 'increase_endurance' ? 'Endurance' : 
               userData.fitnessGoal === 'improve_flexibility' ? 'Flexibility' : 'Maintain'}
            </Text>
          </View>
          
          <View style={styles.statsItem}>
            <View style={styles.statsIconContainer}>
              <HeartPulse size={20} color="#3B82F6" />
            </View>
            <Text style={styles.statsLabel}>Weekly Goal</Text>
            <Text style={styles.statsValue}>{userData.weeklyGoal} workouts</Text>
          </View>
          
          <View style={styles.statsItem}>
            <View style={styles.statsIconContainer}>
              <Weight size={20} color="#3B82F6" />
            </View>
            <Text style={styles.statsLabel}>Weight</Text>
            <Text style={styles.statsValue}>{userData.weight} kg</Text>
          </View>
          
          <View style={styles.statsItem}>
            <View style={styles.statsIconContainer}>
              <Ruler size={20} color="#3B82F6" />
            </View>
            <Text style={styles.statsLabel}>Height</Text>
            <Text style={styles.statsValue}>{userData.height} cm</Text>
          </View>
        </View>

        <ProfileSection title="Account" items={accountItems} />
        <ProfileSection title="Support" items={supportItems} />

        <View style={styles.appVersion}>
          <Text style={styles.appVersionText}>FitTrack v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#1F2937',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    overflow: 'hidden',
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  profileName: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1F2937',
    marginBottom: 4,
  },
  profileEmail: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  editProfileButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#EFF6FF',
    borderRadius: 8,
  },
  editProfileButtonText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#3B82F6',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  statsItem: {
    width: '50%',
    padding: 12,
    alignItems: 'center',
  },
  statsIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EFF6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statsLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  statsValue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1F2937',
  },
  appVersion: {
    alignItems: 'center',
    marginVertical: 24,
  },
  appVersionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#9CA3AF',
  },
});