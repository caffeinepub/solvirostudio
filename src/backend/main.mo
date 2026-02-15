import Array "mo:core/Array";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // Contact form types and state
  type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
  };

  var nextSubmissionId = 0;
  let submissions = Map.empty<Nat, ContactSubmission>();

  // User profile types and state
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // Contact form functions
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    // No authorization check - public contact forms should accept submissions from anyone (including guests)
    let submission : ContactSubmission = {
      id = nextSubmissionId;
      name;
      email;
      message;
    };
    submissions.add(nextSubmissionId, submission);
    nextSubmissionId += 1;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view submissions");
    };
    submissions.values().toArray();
  };

  public query ({ caller }) func getContactInfo() : async {
    email : Text;
    phone : Text;
  } {
    // No authorization check - contact info is public
    {
      email = "solvirostudio@gmail.com";
      phone = "Phone placeholder";
    };
  };

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };
};
