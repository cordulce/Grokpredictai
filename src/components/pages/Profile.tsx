import { UserCircle, Mail, Calendar, TrendingUp, Award } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import { AppContainer } from '../layout/AppContainer';

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <AppContainer>
      <div className="py-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold">Profile</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </Button>
        </div>

        {/* Profile Card */}
        <div className="bg-card border border-border/40 rounded-lg p-6 mb-6">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <UserCircle className="h-16 w-16 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Member since January 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trading Stats */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Trading Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card border border-border/40 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-semibold">142</div>
                  <div className="text-sm text-muted-foreground">Total Trades</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border/40 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/30">
                  <Award className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-green-400">73%</div>
                  <div className="text-sm text-muted-foreground">Win Rate</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border/40 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30">
                  <TrendingUp className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-green-400">+18.4%</div>
                  <div className="text-sm text-muted-foreground">Avg. Return</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
          <div className="space-y-3">
            <div className="bg-card border border-border/40 rounded-lg p-5 flex items-center justify-between">
              <div>
                <h4 className="font-medium mb-1">Current Plan</h4>
                <p className="text-sm text-muted-foreground">Pro Plan - $29/month</p>
              </div>
              <Button variant="outline" size="sm">
                Change Plan
              </Button>
            </div>

            <div className="bg-card border border-border/40 rounded-lg p-5 flex items-center justify-between">
              <div>
                <h4 className="font-medium mb-1">Email Notifications</h4>
                <p className="text-sm text-muted-foreground">Receive market updates and alerts</p>
              </div>
              <Button variant="outline" size="sm">
                Configure
              </Button>
            </div>

            <div className="bg-card border border-border/40 rounded-lg p-5 flex items-center justify-between">
              <div>
                <h4 className="font-medium mb-1">Security</h4>
                <p className="text-sm text-muted-foreground">Password and two-factor authentication</p>
              </div>
              <Button variant="outline" size="sm">
                Manage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
}