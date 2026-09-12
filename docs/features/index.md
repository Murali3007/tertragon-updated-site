---
title: Features
sidebar_position: 1
description: Explore Tetragon capabilities by feature.
---

import DocCard from '@site/src/components/DocCard';
import DocCardGrid from '@site/src/components/DocCardGrid';

Explore the capabilities that make Tetragon useful for runtime security, observability, and policy enforcement.

<DocCardGrid>
  <DocCard title="Capabilities Monitoring" description="Track Linux capabilities and identify privilege changes across workloads." to="/docs/features/capabilities-monitoring" />
  <DocCard title="Execution Monitoring" description="Follow process execution with binary, argument, and Kubernetes workload context." to="/docs/features/execution-monitoring" />
  <DocCard title="File Integrity Monitoring" description="Observe and enforce sensitive file access and modification in real time." to="/docs/features/file-integrity-monitoring" />
  <DocCard title="Kubernetes Identity-Aware Policies" description="Use Kubernetes identity and workload context when writing security policies." to="/docs/features/kubernetes-identity-aware-policies" />
  <DocCard title="Network Observability" description="Understand network activity and its relationship to running processes." to="/docs/features/network-observability" />
  <DocCard title="Operating System Integrity" description="Monitor kernel modules and other changes that affect host integrity." to="/docs/features/operating-system-integrity" />
  <DocCard title="Privileges Monitoring" description="Detect privilege-related process behavior and changes across environments." to="/docs/features/privileges-monitoring" />
</DocCardGrid>
